import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from '../../services/albums.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album-photos',
  imports: [CommonModule],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent implements OnInit {
  photos: any[] = [];
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private albumsService = inject(AlbumsService);

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getAlbumPhotos(id).subscribe(data => this.photos = data);
  }

  goBack() {
    this.router.navigate(['/albums']);
  }
}