import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from '../../services/albums.service';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-album-detail',
  imports: [CommonModule, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit{
  album: any;
  errorMessage: string = '';

  constructor(private route : ActivatedRoute, private router : Router, private albumsService : AlbumsService){}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getAlbumById(id).subscribe(data => this.album = data);
  }

  saveAlbum() {
    this.albumsService.updateAlbum(this.album).subscribe({
      next: () => {
        console.log('Album saved successfully');
        alert('Album name updated!');
      },
      error: (err) => {
        console.error('Error saving album:', err);
        this.errorMessage = 'Failed to save album';
      }
    });
  }

  goBack() {
    this.router.navigate(['/albums']);
  }

  viewPhotos() {
    this.router.navigate([`/albums/${this.album.id}/photos`]);
  }
}
