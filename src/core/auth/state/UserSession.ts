import { EcommerceApp, Dependencies } from "core/app";
import { makeAutoObservable } from "mobx";
import { User } from "../models/User";

export class UserSession {
  public loading = false;
  public loggedUser: User | null = null;
  constructor(private dependencies: Dependencies, private app: EcommerceApp) {
    makeAutoObservable(this);
  }

  async login(username: string, password: string) {
    this.loggedUser = { name: username };
  }

  async logout() {
    this.loggedUser = null;
  }

  get isLogged() {
    return Boolean(this.loggedUser);
  }
}
