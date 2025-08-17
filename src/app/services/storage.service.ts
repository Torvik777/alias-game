import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  save<T>(key: string, data: T): void {
    sessionStorage.setItem(key, JSON.stringify(data));
  }

  has(key: string): boolean{
    return sessionStorage.getItem(key) !== null;
  }

  get<T>(key: string): T | null {
    const raw = sessionStorage.getItem(key);
    return raw ? JSON.parse(raw) as T : null;
  }
  
  clear(key: string): void {
    sessionStorage.removeItem(key);
  }

  clearAll(): void {
    sessionStorage.clear();
  }
}
