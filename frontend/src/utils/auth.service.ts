export interface ILocalUser {
  id: number;
  email: string;
}

class AuthenticationService {
  setUser = (user: ILocalUser): void => {
    // store user to localStorage

    localStorage.setItem("user", JSON.stringify(user));
  };

  getUser = (): ILocalUser | null => {
    // get user from localStorage

    const storedUser = localStorage.getItem("user");

    if (!storedUser) return null;
    const user = JSON.parse(storedUser);

    return user;
  };

  setAccessToken = (accessToken: string): void => {
    // encrypt the access token and save to local storage

    const encryptedAccessToken = btoa(accessToken);

    localStorage.setItem("accessToken", encryptedAccessToken);
  };

  getAccessToken = (): string | null => {
    // decrypt the access token and save to local storage

    const encryptedAccessToken = localStorage.getItem("accessToken");

    if (!encryptedAccessToken) return null;
    const decryptedAccessToken = atob(encryptedAccessToken);

    return decryptedAccessToken;
  };

  setTokenExpiryTime = (time: Date): void => {
    // set the token expiry time in local storage

    localStorage.setItem("tokenExpiryTime", JSON.stringify(new Date(time)));
  };

  getTokenExpiryTime = (): Date | null => {
    // get the token expiry time from local storage

    const storedTokenExpiryTime = localStorage.getItem("tokenExpiryTime");

    if (!storedTokenExpiryTime) return null;
    const tokenExpiryTime = JSON.parse(storedTokenExpiryTime);

    return tokenExpiryTime;
  };

  hasTokenExpired(): boolean {
    // check if the access token has expired

    const tokenExpiryTime = this.getTokenExpiryTime();

    if (!tokenExpiryTime) return true;

    const currentTime = new Date();

    const timeDiff =
      new Date(tokenExpiryTime).getTime() - currentTime.getTime();

    return timeDiff <= 0;
  }

  logout = (): void => {
    // remove user and access token from local storage

    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("tokenExpiryTime");
  };

  isAuthenticated(): boolean {
    // check if the user is authenticated

    if (this.getUser() === null) {
      this.logout();

      return false;
    }

    return true;
  }
}

const authService = new AuthenticationService();

export default authService;
