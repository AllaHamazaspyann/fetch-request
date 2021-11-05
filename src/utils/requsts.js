class FetchRequest {
  constructor(url, body, token) {
    this.url = url;
    this.body = body;
    this.token = token;
  };

  getRequest() {
    try {
      const request = await fetch('https://localhost:3000', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });
      const response = request.json();
      return response;
    } catch (e) {
      console.log(e.message);
    }
  }

  postRequest() {
    try {
      const request = await fetch('https://localhost:3000', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`,
        }, 
        body,
      });
      const response = request.json();
      return response;
    } catch (e) {
      console.log(e.message)
    }
  }

  putRequest() {
    try {
      const request = await fetch('https://localhost:3000', {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`,
        },
        body,
      });
      const response = request.json();
      return response;
    } catch (e) {
      console.log(e.message)
    }
  }
  deleteRequest(){
    try{
      const request = await fetch('https://localhost:3000', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body,
      });
      const response = request.json();
      return response;
    }catch(e){
      console.log(e.message);
    }
  }
}

export const fetchApi = new FetchRequest(url, body, token);
