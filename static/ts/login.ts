import axios from 'axios';

window.onload = () => {
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
        axios.post('http://localhost:8080/login?username=test123&password=test123', {
            name: 'John Doe',
            age: 30
        })
            .then(response => console.log(response.data))
            .catch(error => console.error(error));
        //sendPostRequest("http://localhost:8080/login?username=test123&password=test123", "")
    });


    async function sendPostRequest(myUrl: RequestInfo | URL, content: any) {
        const response:Response = await fetch(myUrl, {
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