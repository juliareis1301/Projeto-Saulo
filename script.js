window.onload = async function() {
    const url = 'http://127.0.0.1:8000/dog/'; // Substitua pela URL correta da sua API
    const response = await fetch(url);
    const data = await response.json();
  
    const cards = document.querySelectorAll('.card');
  
    data.forEach((dog, index) => {
      const card = cards[index];
      const cardBody = card.querySelector('.card-body');
  
      const title = cardBody.querySelector('.card-title');
      title.textContent = dog.nome;
  
      const description = cardBody.querySelector('.card-text');
      description.textContent = dog.descricao;
 
      const ageItem = cardBody.querySelector('.card-idade');
      ageItem.textContent = `Idade: ${dog.idade} ano(s)`;
  
      const breedItem = cardBody.querySelector('.card-raca');
      breedItem.textContent = `Raça: ${dog.raca}`;
  
      const sexItem = cardBody.querySelector('.card-sexo');
      sexItem.textContent = `Sexo: ${dog.sexo}`;
    });
  };
  


/*window.onload = async function() {
    const url = 'http://127.0.0.1:8000/dog/'; // Substitua pela URL correta da sua API
    const response = await fetch(url);
    const data = await response.json();

    const cardsContainer = document.querySelector('.card-container');

    data.forEach(dog => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.style.width = '18rem';

      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');

      const title = document.createElement('h5');
      title.classList.add('card-title');
      title.textContent = dog.nome; // Exibe o nome do dog

      const description = document.createElement('p');
      description.classList.add('card-text');
      description.textContent = dog.descricao; // Exibe a descrição do dog

      const detailsList = document.createElement('ul');
      detailsList.classList.add('list-group', 'list-group-flush');

      const idItem = document.createElement('li');
      idItem.classList.add('list-group-item');
      idItem.textContent = `ID: ${dog.id}`; // Exibe o ID do dog

      const ageItem = document.createElement('li');
      ageItem.classList.add('list-group-item');
      ageItem.textContent = `Idade: ${dog.idade} ano(s)`; // Exibe a idade do dog

      const breedItem = document.createElement('li');
      breedItem.classList.add('list-group-item');
      breedItem.textContent = `Raça: ${dog.raca}`; // Exibe a raça do dog

      const sexItem = document.createElement('li');
      sexItem.classList.add('list-group-item');
      sexItem.textContent = `Sexo: ${dog.sexo}`; // Exibe o sexo do dog

      const adoptButton = document.createElement('a');
      adoptButton.classList.add('btn', 'btn-primary');
      adoptButton.textContent = 'Adotar';
      adoptButton.href = '#'; // Adicione o link para a ação de adoção

      detailsList.appendChild(idItem);
      detailsList.appendChild(ageItem);
      detailsList.appendChild(breedItem);
      detailsList.appendChild(sexItem);

      cardBody.appendChild(title);
      cardBody.appendChild(description);
      cardBody.appendChild(detailsList);
      cardBody.appendChild(adoptButton);

      card.appendChild(cardBody);
      cardsContainer.appendChild(card);
    });
  };*/