import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {
      name: 'Чехол для Iphone 13',
      description: 'Прочный и стильный чехол.',
      rating: 4.5,
      image: './assets/iphone13.jpeg',
      link: 'https://kaspi.kz/shop/p/dlja-apple-iphone-13-prozrachnyi-106185651/?c=750000000',
    },
    {
      name: 'Чехол для Iphone 14',
      description: 'Ударопрочный чехол с подставкой.',
      rating: 4.7,
      image: './assets/iphone14.jpg',
      link: 'https://kaspi.kz/shop/p/dlja-apple-iphone-14-prozrachnyi-107664472/?c=750000000',
    },
    {
      name: 'Чехол для Iphone 15',
      description: 'Тонкий силиконовый чехол.',
      rating: 4.2,
      image: './assets/iphone15.jpeg',
      link: 'https://kaspi.kz/shop/p/dlja-apple-iphone-15-pro-prozrachnyi-113282783/?c=750000000',
    },
    {
      name: 'Чехол для iPhone 11',
      description: 'Ударопрочный чехол с подставкой.',
      rating: 4.8,
      image: './assets/iphone11.jpeg',
      link: 'https://kaspi.kz/shop/p/dlja-apple-iphone-11-prozrachnyi-103661424/?c=750000000',
    },
    {
      name: 'Чехол для Iphone 13',
      description: 'Прочный и стильный чехол.',
      rating: 4.5,
      image: './assets/iphone13.jpeg',
      link: 'https://kaspi.kz/shop/p/dlja-apple-iphone-13-prozrachnyi-106185651/?c=750000000',
    },
    {
      name: 'Чехол для Iphone 14',
      description: 'Ударопрочный чехол с подставкой.',
      rating: 4.7,
      image: './assets/iphone14.jpg',
      link: 'https://kaspi.kz/shop/p/dlja-apple-iphone-14-prozrachnyi-107664472/?c=750000000',
    },
    {
      name: 'Чехол для Iphone 15',
      description: 'Тонкий силиконовый чехол.',
      rating: 4.2,
      image: './assets/iphone15.jpeg',
      link: 'https://kaspi.kz/shop/p/dlja-apple-iphone-15-pro-prozrachnyi-113282783/?c=750000000',
    },
    {
      name: 'Чехол для iPhone 11',
      description: 'Ударопрочный чехол с подставкой.',
      rating: 4.8,
      image: './assets/iphone11.jpeg',
      link: 'https://kaspi.kz/shop/p/dlja-apple-iphone-11-prozrachnyi-103661424/?c=750000000',
    },
    {
      name: 'Чехол для Iphone 13',
      description: 'Прочный и стильный чехол.',
      rating: 4.5,
      image: './assets/iphone13.jpeg',
      link: 'https://kaspi.kz/shop/p/dlja-apple-iphone-13-prozrachnyi-106185651/?c=750000000',
    },
    {
      name: 'Чехол для Iphone 14',
      description: 'Ударопрочный чехол с подставкой.',
      rating: 4.7,
      image: './assets/iphone14.jpg',
      link: 'https://kaspi.kz/shop/p/dlja-apple-iphone-14-prozrachnyi-107664472/?c=750000000',
    },
  ];

  shareProduct(link: string, platform: string) {
    let shareUrl = '';
    if (platform === 'whatsapp') {
      shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(link)}`;
    } else if (platform === 'telegram') {
      shareUrl = `https://t.me/share/url?url=${encodeURIComponent(link)}`;
    }
    window.open(shareUrl, '_self');
  }
}
