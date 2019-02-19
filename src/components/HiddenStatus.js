import i18n from '../i18n/i18n';

const statusComponent = document.createElement('div');
const passage = document.createElement('p');

passage.innerText = i18n.t('Hidden Status Content');

statusComponent.classList.add("new-status", "status-wrapper", "hidden-status");
statusComponent.appendChild(passage);

export default statusComponent;
