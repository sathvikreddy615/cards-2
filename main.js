const createBtn = document.querySelector("#create-btn");
const cardContainer = document.querySelector("#card-container");

createBtn.addEventListener("click", () => {

    const inputOne = () => {
        let input1 = document.createElement("input");
        input1.type = "text";
        input1.className = "input1";
        input1.addEventListener("change", () => {
            event.target.parentNode.style.backgroundColor = event.target.value;
        })
        return input1;
    }

    const inputTwo = () => {
        let input2 = document.createElement("input");
        input2.type = "text";
        input2.className = "input2";
        input2.addEventListener("change", () => {
            event.target.parentNode.style.color = event.target.value;
        })
        return input2;
    }

    // const submitButton = () => {
    //     let submitBtn = document.createElement("button");
    //     submitBtn.className = "submit-button";
    //     submitBtn.innerHTML = "Submit";
    //     submitBtn.addEventListener("click", () => {
    //         inputOne();
    //         inputTwo();
    //     })
    //     return submitBtn;
    // }

    const deleteButton = () => {
        let deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        deleteBtn.innerHTML = "Delete";
        deleteBtn.addEventListener("click", () => {
            event.target.parentNode.remove();
        })
        return deleteBtn
    }

    let card = document.createElement("div");
    card.className = "card";

    const addUserText = () => {
        let userText = document.querySelector("#text-box").value;
        let injectText = document.createElement("p");
        injectText.textContent = userText;
        return injectText;
    }

    cardContainer.appendChild(card);
    card.appendChild(inputOne());
    card.appendChild(inputTwo());
    // card.appendChild(submitButton());
    card.appendChild(deleteButton());
    card.appendChild(addUserText());

})