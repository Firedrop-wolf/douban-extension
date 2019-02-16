const statusComponent = document.createElement('div');
const passage = document.createElement('p');

passage.innerText = 'This content is hidden based on your muted words.';

statusComponent.classList.add("new-status", "status-wrapper", "hidden-status");
statusComponent.appendChild(passage);

export default statusComponent;
