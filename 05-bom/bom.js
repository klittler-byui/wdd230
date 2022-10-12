const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

      button.addEventListener('click', function() {
        if (input.value.length === 0) {
          console.log ("No scripture entered")
        }

        else {
        const myItem = input.value;
        input.value = '';

        const listItem = document.createElement('li');
        const listText = document.createElement('span');
        const listBtn = document.createElement('button');

        listItem.appendChild(listText);
        listText.textContent = myItem;
        listItem.appendChild(listBtn);
        listBtn.textContent = '🆇';
        list.appendChild(listItem);

        listBtn.addEventListener('click', () => {
          list.removeChild(listItem);
        });
      }
        input.focus();
      });