import {closeModal, openModal} from "./modalMod";
import {postData} from "../services/services";

function forms(formSelector,modalTimer) {
    //todo
    // Forms

    const forms = document.querySelectorAll(formSelector);

    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Success',
        failed: 'Failed',
    };

    forms.forEach(item => {
        bindPostData(item);
    })


    // todo
    //  The following function returns "promise"
    //  ASYNC AWAIT



    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = ` 
                display:block;
                margin: 0 auto;
            `;
            // form.append(statusMessage);
            form.insertAdjacentElement("afterend", statusMessage);

            // const request = new XMLHttpRequest();
            // request.open('POST', 'server.php');



            // request.setRequestHeader('Content-Type', 'application/json');

            const formData = new FormData(form);

            // todo Преобразование JSON формата
            //  const object = {};
            //  formData.forEach(function (value,key){
            //     object[key] = value;
            //  });

            // todo
            //  Object Entries

            // todo В следующем коде из объекта "formData" перебираю в масстив а потом уже в обычный объект
            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            // const obj = {a: 23, b: 50};
            // console.log(Object.entries(obj));
            // const json = JSON.stringify(object);
            // request.send(formData);
            // fetch('server.php', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(object)
            // })

            postData('http://localhost:3000/requests', json)  // .then(data => data.text())
                .then(data => {
                    console.log(data);
                    console.log(message.success);
                    showThanksModal(message.success);
                    statusMessage.remove();
                }).catch(() => {
                showThanksModal(message.failed);
            }).finally(() => {
                form.reset();
            });



            // request.send(json);
            //
            // request.addEventListener('load', () => {
            //     if (request.status === 200){
            //         console.log(request.response);
            //         console.log(message.success);
            //         showThanksModal(message.success);
            //         form.reset();
            //         statusMessage.remove();
            //     } else {
            //         showThanksModal(message.failed);
            //     }
            // })

        });
    }

    // todo
    //  Beautiful modification



    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        openModal('.modal', modalTimer);

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = ` 
            <div class="modal__content">
                <div class="modal__close" data-close="">×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;

        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal('.modal');
        }, 4000);
    }


    // fetch('http://localhost:3000/menu')
    //     .then(data => data.json())
    //     .then(res => console.log(res));
}

export default forms;