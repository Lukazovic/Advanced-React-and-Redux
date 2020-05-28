<h1 align="center">Server</h1>
<h4 align="center">
  <img width="400" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" /><br>
</h4>

<p align="center">
  <a href="#-how-to-use">How to Use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-clipboard-endpoints">Endpoints</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#pencil-author">Author</a>
</p>

## 💻 How to Use

### Prerequisites

```
Node
Mongodb
```

After you've cloned the repository and Navigated to the `Authorization` folder:
- Go to the server folder: `cd server`;
- Download the dependencies: `npm install`;
- Create a `config.js` in the `server` folder and setup with a secret word like this:
  ```node
  module.exports = {
    secret: "SOME_KEY WORD",
  };
  ```
- Start the application: `npm start`.

You may see a message in the console showing the port that your application is running.

## :clipboard: Endpoints

- GET: `/` - Test if a user is Logged;

- POST: `/signup` - Sign Up a user:

#### Paramethers

|   Paramether   |       Description    |     Type     |   Required   |
| :------------: | :------------------: | :----------: | :----------: |
|      email     |   User's email       |    String    |     True     |
|    password    |   User's password    |    String    |     True     |

##### JSON example:

```json
{
	"email": "test@email.com",
	"password": "idontknow"
}
```

> Observation: **As response you will receive a token so you will be able to use it to authenticate the user when it needed**

- POST: `/signin` - Sign In a user:

#### Paramethers

|   Paramether   |       Description    |     Type     |   Required   |
| :------------: | :------------------: | :----------: | :----------: |
|      email     |   User's email       |    String    |     True     |
|    password    |   User's password    |    String    |     True     |

##### JSON example:

```json
{
	"email": "test@email.com",
	"password": "idontknow"
}
```

> Observation: **As response you will receive a token so you will be able to use it to authenticate the user when it needed**


## :pencil: Author

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/Lukazovic">
        <img 
          src="https://avatars0.githubusercontent.com/u/54550926?s=460&u=cdeeac652ce0597a986fbdcff6e249ad27a1f1da&v=4" 
          width="100px;" 
          alt=""
        />
        <br />
        <sub>
        <b>Lucas Vieira</b>
        </sub>
      </a>
      <br />
    </td>
  <tr>
</table>
