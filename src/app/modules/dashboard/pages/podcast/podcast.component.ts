import { Component } from '@angular/core';
import { PodcastCardItemComponent } from '../../components/podcast/podcast-card-item/podcast-card-item.component';
import { NgFor } from '@angular/common';
import { PodcastPlayerComponent } from '../../components/podcast/podcast-player/podcast-player.component';
import { PodcastCardBannerComponent } from '../../components/podcast/podcast-card-banner/podcast-card-banner.component';
import { PodcastHeaderComponent } from '../../components/podcast/podcast-header/podcast-header.component';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    standalone: true,
    imports: [
        PodcastHeaderComponent,
        PodcastCardBannerComponent,
        PodcastPlayerComponent,
        NgFor,
        PodcastCardItemComponent,
    ],
})
export class PodcastComponent {

}
