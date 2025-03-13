import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AlbumsService } from '../../services/albums.service';

@Component({
  selector: 'app-albums',
  imports: [CommonModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit{
  albums: any[] = [];

  constructor(private albumsService: AlbumsService, private router: Router) {}

  ngOnInit() {
    this.albumsService.getAlbums().subscribe(data => this.albums = data);
  }

  viewDetails(id: number) {
    this.router.navigate([`/albums/${id}`]);
  }

  deleteAlbum(id: number) {
    this.albumsService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(album => album.id !== id);
    });
  }
}
