# ReactNative-Express
This project shows how to connect an express server to react-Native application.

## Access the server

Change the url to your local IP-Address
```js
  useEffect(() => {
    async function getData() {
      try{
        const {data} = await axios.get("http://192.168.0.8:8000/data");
        setData(data);
      }
      catch (error){
        console.log(error.message);
        Alert(error);
      }
    }
    getData();
  }, []);
```
## Start Server
```sh
cd ReactNative-Express/server
yarn install
yarn start
```

## Setup
```sh
cd ReactNative-Express
yarn install
expo start
```

