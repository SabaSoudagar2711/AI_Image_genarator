import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: []
})
export class CreatePostComponent implements OnInit {

    form = {
      name: '',
      prompt: '',
      photo: '',
    };

    generatingImg = false;
    loading = false;



    constructor(private router: Router, private http: HttpClient) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  handleChange(event: any): void {
    this.form = { ...this.form, [event.target.name]: event.target.value };
  }

  handleSurpriseMe(): void {

  }

   async generateImage(): Promise<void> {
    if (this.form.prompt) {
      try {
        this.generatingImg = true;

        // Make an HTTP POST request to the DALL-E API
        const response: any = await this.http.post<any>('https://dalle-arbb.onrender.com/api/v1/dalle', {
          prompt: this.form.prompt,
        }).toPromise();

        // Update the form with the generated image
        this.form.photo = `data:image/jpeg;base64,${response.photo}`;
      } catch (err) {
        console.error(err);
      } finally {
        this.generatingImg = false;
      }
    } else {
      alert('Please provide a proper prompt');
    }
  }

  // Handle form submission
  async handleSubmit(): Promise<void> {
    if (this.form.prompt && this.form.photo) {
      this.loading = true;

      try {
        // Make an HTTP POST request to share the image with the community
        await this.http.post('https://dalle-arbb.onrender.com/api/v1/post', this.form).toPromise();

        alert('Success');
        this.router.navigate(['/']); // Navigate to the home page after successful submission
      } catch (err) {
        console.error(err);
      } finally {
        this.loading = false;
      }
    } else {
      alert('Please generate an image with proper details');
    }
  }
}



