class AdvancedCache {
  constructor() {
    this.memory = new Map();
    this.storage = typeof window !== "undefined" ? localStorage : null;
    this.maxAge = 5 * 60 * 1000; // 5 minutes default
    this.maxMemoryItems = 100; // Prevent memory leaks
  }

  set(key, value, maxAge = this.maxAge) {
    const item = {
      value,
      timestamp: Date.now(),
      maxAge,
      accessCount: 1,
    };

    // Memory cache with LRU eviction
    if (this.memory.size >= this.maxMemoryItems) {
      this._evictLRU();
    }
    this.memory.set(key, item);

    // Persistent storage (with error handling)
    if (this.storage) {
      try {
        this.storage.setItem(`cache_${key}`, JSON.stringify(item));
      } catch (e) {
        if (e.name === "QuotaExceededError") {
          console.warn("Storage quota exceeded, clearing expired items");
          this.clearExpired();
          try {
            this.storage.setItem(`cache_${key}`, JSON.stringify(item));
          } catch (e2) {
            console.warn("Unable to store in localStorage:", e2);
          }
        }
      }
    }
  }

  get(key) {
    // Check memory first (fastest)
    let item = this.memory.get(key);

    // Fallback to storage
    if (!item && this.storage) {
      try {
        const stored = this.storage.getItem(`cache_${key}`);
        if (stored) {
          item = JSON.parse(stored);
          // Promote to memory for faster future access
          this.memory.set(key, item);
        }
      } catch (e) {
        console.warn("Error reading from storage:", e);
        // Clean up corrupted item
        this.storage.removeItem(`cache_${key}`);
      }
    }

    if (!item) return null;

    // Check expiry
    if (Date.now() - item.timestamp > item.maxAge) {
      this.delete(key);
      return null;
    }

    // Update access count for LRU
    item.accessCount++;
    item.lastAccessed = Date.now();

    return item.value;
  }

  delete(key) {
    this.memory.delete(key);
    if (this.storage) {
      this.storage.removeItem(`cache_${key}`);
    }
  }

  clear() {
    this.memory.clear();
    if (this.storage) {
      // Clear only our cache items
      const keysToRemove = [];
      for (let i = 0; i < this.storage.length; i++) {
        const key = this.storage.key(i);
        if (key && key.startsWith("cache_")) {
          keysToRemove.push(key);
        }
      }
      keysToRemove.forEach((key) => this.storage.removeItem(key));
    }
  }

  clearExpired() {
    const now = Date.now();

    // Clear expired items from memory
    for (const [key, item] of this.memory.entries()) {
      if (now - item.timestamp > item.maxAge) {
        this.memory.delete(key);
      }
    }

    // Clear expired items from storage
    if (this.storage) {
      const keysToRemove = [];
      for (let i = 0; i < this.storage.length; i++) {
        const key = this.storage.key(i);
        if (key && key.startsWith("cache_")) {
          try {
            const item = JSON.parse(this.storage.getItem(key));
            if (now - item.timestamp > item.maxAge) {
              keysToRemove.push(key);
            }
          } catch {
            // Remove corrupted items
            keysToRemove.push(key);
          }
        }
      }

      keysToRemove.forEach((key) => this.storage.removeItem(key));
    }
  }

  _evictLRU() {
    // Find least recently used item
    let lruKey = null;
    let lruTime = Date.now();

    for (const [key, item] of this.memory.entries()) {
      if (item.lastAccessed < lruTime) {
        lruTime = item.lastAccessed;
        lruKey = key;
      }
    }

    if (lruKey) {
      this.memory.delete(lruKey);
    }
  }

  getStats() {
    return {
      memoryItems: this.memory.size,
      storageItems: this.storage
        ? Array.from({ length: this.storage.length }, (_, i) =>
            this.storage.key(i)
          ).filter((key) => key && key.startsWith("cache_")).length
        : 0,
    };
  }

  // Preload frequently used data
  async preload(keys) {
    const promises = keys.map(async (key) => {
      if (!this.get(key)) {
        // Data not in cache, might need to load
        return null;
      }
      return key;
    });

    return Promise.all(promises);
  }
}

// Singleton instance
export const cache = new AdvancedCache();

// Auto-cleanup expired items every 5 minutes
if (typeof window !== "undefined") {
  setInterval(() => {
    cache.clearExpired();
  }, 5 * 60 * 1000);
}
