import { Component, OnInit } from "@angular/core";
import { MatMenuModule, MdSnackBar, MatProgressBarModule} from "@angular/material";
import { GithubService } from "./github.service";
import 'rxjs/add/operator/take';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Lucas Juliano";

  liked: number = 0;
  users: Array<any>;
  showProgressBar: boolean = false;

  constructor(
    private githubService: GithubService,
    private mdProgressBar: MatProgressBarModule,
    private snackBar: MdSnackBar
  ) {}

  ngOnInit(): void {

    this.showProgressBar = true;
    setTimeout(() => {
      this.githubService.getUsers().subscribe((user: any) => {
        this.showProgressBar = false;
        this.users = user;
        console.log(this.users);
      });
    }, 2000);
  }

  likeMe(i) {
    if (this.liked !== i) {
      this.liked = i;
    }
    console.log(i);
  }

  deleteMe(i, login: string) {
      this.users.splice(i, 1);
     this.snackBar.open( `Usuário @${login.toUpperCase()} excluido com sucesso` ,'Atenção',{
      duration: 700,
      direction:  'ltr',
      horizontalPosition: 'end',
      verticalPosition: 'top'
    });

  }
}
