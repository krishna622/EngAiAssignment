import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public title = 'my-app';
  public postData:any = [];
  public searchValue:any = '';
  public dataObject:any = {};
  public showModal:boolean = false;
  public constructor(private postService: PostService) {}

  ngOnInit() {
    this.getPostData(); // calling method to display posts on initial load
    this.getDataPeriodically(); // calling this method to get data from server after 10 second
  }

  /**
   * @method: getPostData()
   * @description: Get post data from the remote
   * server
   */
  getPostData() {
    this.searchValue = '';
    this.postService.getPost().subscribe(response => {
      this.postData = response.hits; // set json in postData
    });
  }
  /**
   * @method: onSearchChange()
   * @description: Get the filtered data by
   * passing Title
   */
  onSearchChange() {
    let data = this.postData.filter(arrayObj => arrayObj.title.toLowerCase().includes(this.searchValue));
    this.postData = data;
  }
  /**
   * @method:viewPost(param: index)
   * @description: View post by passing the index
   * of the array and display it in the modal
   * popup in json format
   */
  viewPost(index) {
    this.showModal = true;
    this.dataObject = this.postData[index];
  }
  /**
   * @method:getDataPeriodically()
   * @description: Method is used to hit the API
   * at the interval of every 10 seconds
   */
  getDataPeriodically() {
    setInterval(() => {
     this.getPostData()
    }, 10000);
  }
}
