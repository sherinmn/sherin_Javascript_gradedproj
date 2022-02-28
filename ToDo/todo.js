window.addEventListener('load', ()=> {
    const form = document.querySelector("#taskform");
    const list_elt = document.querySelector("#tasks");
    const input = document.querySelector("#txt-input");
    

    form.addEventListener('submit', (e)=>{
        e.preventDefault();

        const task = input.value;

        const task_html_element = document.createElement('Div');
        task_html_element.classList.add('task');

        const task_content = document.createElement('Div');
        task_content.classList.add("content");

        task_html_element.appendChild(task_content);

        const task_input = document.createElement("input");
        task_input.classList.add("text");
        task_input.type = "text";
        task_input.setAttribute("readonly","readonly");
        task_input.value = task;

        task_content.appendChild(task_input);

        const task_actions_element = document.createElement("Div");
        task_actions_element.classList.add("actions");

        const actions_edit_element = document.createElement("Button");
        actions_edit_element.classList.add("edit");
        actions_edit_element.innerText = "Edit";

        const actions_delete_element = document.createElement("Button");
        actions_delete_element.classList.add("delete");
        actions_delete_element.innerText = "Delete";

        task_html_element.appendChild(task_actions_element);

        task_actions_element.appendChild(actions_edit_element);
        task_actions_element.appendChild(actions_delete_element);


        list_elt.appendChild(task_html_element);

        input.value ="";

        actions_delete_element.addEventListener('click', ()=>{
            list_elt.removeChild(task_html_element);
        })


        actions_edit_element.addEventListener('click', ()=>{
            if(actions_edit_element.innerText.toLowerCase()=="edit" ){
                task_input.removeAttribute("readonly");
                task_input.focus();
                actions_edit_element.innerText ="Save";
            }else{
                task_input.setAttribute("readonly","readonly");
                actions_edit_element.innerText ="Edit";
            }
        })


    })
})