export class StorageService {
    getItemLocalStorage(key: any) {
        return localStorage.getItem(key)
    }
    setItemLocalStorage(key: any, value: any) {
        localStorage.setItem(key, value)
    }
    getItemSessionStorage(key: any) {
        return sessionStorage.getItem(key)
    }
    setItemSessionStorage(key: any, value: any) {
        sessionStorage.setItem(key, value)
    }
    setCookie(cname:any, cvalue:any, exdays:any) {
        var d = new Date();
        d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
      }
    getCookie(cname:any) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(";");
        for (var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == " ") {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }
    clearAll() {
        localStorage.clear();
        sessionStorage.clear();
        var cookies = document.cookie;

        for (var i = 0; i < cookies.split(";").length; ++i) {
            var myCookie = cookies[i];
            var pos = myCookie.indexOf("=");
            var name = pos > -1 ? myCookie.substr(0, pos) : myCookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }
    }
}