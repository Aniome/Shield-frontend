import axios from 'axios-typescript';

window.onload = () => {

    axios({
        method: 'post',
        mode: 'no-cors',
        url: 'http://localhost:8080/login',
        headers: {
            'Content-Type': 'application/json',
        },
        data: {
            username: 'test123',
            password: 'test123'
        }
    }).then(function (response) {
        // обработка успешного запроса
        console.log(response);
    })
        .catch(function (error) {
            // обработка ошибки
            console.log(error);
        });

    const signUpButton: HTMLElement | null = document.getElementById('signUp');
    const signInButton: HTMLElement | null = document.getElementById('signIn');
    const container: HTMLElement | null = document.getElementById('container');
    const signInForm: HTMLElement | null = document.getElementById("sign-in-form");

    signUpButton?.addEventListener('click', () => {
        container!.classList.add("right-panel-active");
    });

    signInButton?.addEventListener('click', () => {
        container!.classList.remove("right-panel-active");
    });

    signInForm?.addEventListener('submit', function (event: SubmitEvent): void {
        event.preventDefault();

        const url = 'http://localhost:8080/login';
        //const data = JSON.stringify({ name: 'Иван', age: 30 });

        fetch(url, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
                'Connection': 'keep-alive'
            },
            body: JSON.stringify({
                "username": "test123",
                "password": "test123"
            })
        })
            .then(response => {
                if (!response.ok) {
                    console.log(response.status);
                    //throw new Error('Ошибка при отправке запроса');
                }
                return response;
            })
            .then(data => {
                console.log('Успешно отправлено:', data);
            })
            .catch(error => {
                console.error('Ошибка:', error);
            });

    });


    async function sendPostRequest(myUrl: RequestInfo | URL, content: any) {
        const response: Response = await fetch(myUrl, {
            mode: 'no-cors',
            method: 'POST',
            body: content,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        });
        if (!response.ok) {
            //alert(response.text);
            console.log("not ok: " + response.status);
        }

        if (response.body !== null) {
            //alert(response.status)
            console.log("body!=null: " + response.status);
            // body is ReadableStream<Uint8Array>
            // parse as needed, e.g. reading directly, or
            //const asString = new TextDecoder("utf-8").decode(response.body);
            // and further:
            //const asJSON = JSON.parse(asString);  // implicitly 'any', make sure to verify type on runtime.
        }
    }
}

//"start": "live-server --port=8079 --cors --no-browser",