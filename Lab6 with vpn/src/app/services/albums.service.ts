import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Album {
  userId: number;
  id: number;
  title: string;
}

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private http = inject(HttpClient);
  private albumsUrl = 'https://jsonplaceholder.typicode.com/albums';
  private photosUrl = (albumId: number) => `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`;

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.albumsUrl);
  }

  getAlbumById(id: number): Observable<Album> {
    return this.http.get<Album>(`${this.albumsUrl}/${id}`);
  }

  getAlbumPhotos(id: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.photosUrl(id));
  }

  updateAlbum(album: Album): Observable<Album> {
    return this.http.put<Album>(`${this.albumsUrl}/${album.id}`, album);
  }

  deleteAlbum(id: number): Observable<void> {
    return this.http.delete<void>(`${this.albumsUrl}/${id}`);
  }
}
