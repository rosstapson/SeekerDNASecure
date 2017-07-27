import {
  AsyncStorage
  
} from 'react-native';
import { API_URL } from './constants';

const Api = {
  async getRandomQuote() {
   
    const url = 'http://api.icndb.com/jokes/random';
    let config = {
            method: 'get',
            headers: {
                'content-type': 'application/json'                
            }
        }

    let response = await fetch(url, config);
    
    if (response.status >= 200 && response.status < 300) {       
        let quote = await response.json();   
        return quote;        
      } else {        
        throw new Error(response.errorMessage);
      }
  
  },
  async getUser(username, token) {
    let config = {
            method: 'post',
            headers: {
                'content-type': 'application/json',
                'x-access-token': token
            },
            body: JSON.stringify({username})
        }

    let response = await fetch(API_URL + "userdetails", config);
    
    if (response.status >= 200 && response.status < 300) {       
        let user = await response.json();   
        return user;        
      } else {        
        throw new Error(response.errorMessage);
      }
  },
  async deleteImageForAsset(imageUrl, dnaCode, username, token) {
    
      
    let config = {
      method: 'post',
      headers: {
        'content-type': 'application/json',
        'x-access-token': token
      },
      body: JSON.stringify({
        username: username,
        url: imageUrl,
        dnaCode: dnaCode
      })
    }
    let response = await fetch(API_URL + "deleteimage", config);
    
    if (response.status >= 200 && response.status < 300) {       
        let message = await response.json();   
        return message;        
      } else {        
        throw new Error(response.errorMessage);
      }
  },
  async updateUser(user, token) {
    let config = {
            method: 'post',
            headers: {
                'content-type': 'application/json',
                'x-access-token': token
            },
            body: JSON.stringify(user)
        }

        let response = await fetch(API_URL + "updateuser", config);
        let json = await response.json();
        if (response.status >= 200 && response.status <= 299) {          
          return json.user;
        }
        else {
          throw new Error(json.errorMessage);
        }

  },
  async updateAssetForUser(asset, username, token) {
    let config = {
            method: 'post',
            headers: {
                'content-type': 'application/json',
                'x-access-token': token
        },
        body: JSON.stringify({
            username: username,
            asset: asset
        })
    };
    let result = await fetch(API_URL + "updateasset", config);
    let json = await result.json();
    if (result.status >= 200 && result.status <= 299) {
          
        return json.assets;        
      } else {
        throw new Error(json.errorMessage);
      }

  },
  async addAssetForUser(asset, username, token) {
    let config = {
            method: 'post',
            headers: {
                'content-type': 'application/json',
                'x-access-token': token
        },
        body: JSON.stringify({
            username: username,
            asset: asset
        })
    };
    let result = await fetch( API_URL + "addasset", config);
    
    if (result.status >= 200 && result.status < 300) {       
        //handle success              
        return;        
      } else {        
        let error = result;
        throw error;
      }

  },
  async getAssetsForUser(username, token) {
    
    try {
      
      let response = await fetch( API_URL + 'assets', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'x-access-token': token
        },
        body: JSON.stringify({username: username})
      });
      let res = await response.json();
      //await AsyncStorage.setItem(JSON.stringify("assets", res.assets));
     
      if (response.status >= 200 && response.status < 300) {       
        //handle success        
        return res.assets;        
      } else {        
        let error = res;
        throw error;
      }
    }
    catch(error) {
      console.log("api.getAssets: " + error.message);
      alert(error);
    }
  }  
}
export default Api;