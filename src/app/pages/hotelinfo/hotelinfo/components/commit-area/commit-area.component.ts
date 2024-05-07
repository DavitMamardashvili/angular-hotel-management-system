import { Component } from '@angular/core';

@Component({
  selector: 'app-commit-area',
  templateUrl: './commit-area.component.html',
  styleUrl: './commit-area.component.css'
})
export class CommitAreaComponent {
  newReview: string = '';
  userReviews: string[] = [];

  addReview() {
    if (this.newReview.trim() !== '') {
      this.userReviews.push(this.newReview);
      this.newReview = '';
    }
  }
}
