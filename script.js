

    document.addEventListener('DOMContentLoaded', function () {
        // Get the current hour using 
        const currentHour = dayjs().hour();

        const currentDate = dayjs().format('MMMM DD, YYYY');

        // Display the current date 
        document.getElementById('currentDay').textContent = `Today is ${currentDate}`;
      
        const timeBlocks = document.querySelectorAll('.time-block');
      
        timeBlocks.forEach(function (timeBlock) {
            console.log('Processing time block:', timeBlock);
          // Extract the hour from the time block id 
          const blockHour = parseInt(timeBlock.id.split('-')[2]);
      
          // Comparing the block hour with the current hour 
          if (blockHour < currentHour) {
            timeBlock.classList.add('past');
            timeBlock.classList.remove('present', 'future');
          } else if (blockHour === currentHour) {
            timeBlock.classList.add('present');
            timeBlock.classList.remove('past', 'future');
          } else {
            timeBlock.classList.add('future');
            timeBlock.classList.remove('past', 'present');
          }
      
          // Retrieve user input from localStorage and set textarea values
          const userInput = localStorage.getItem(timeBlock.id);
          const textarea = timeBlock.querySelector('.description');
      
          if (userInput !== null) {
            textarea.value = userInput;
          }
        });
      
        const saveButtons = document.querySelectorAll('.saveBtn');
      
        saveButtons.forEach(function (saveButton) {
          saveButton.addEventListener('click', function () {
            // Get the user input from the textarea
            const userInput = this.parentNode.previousElementSibling.querySelector('.description').value;
       
            const timeBlockId = this.parentNode.parentNode.parentNode.id;
      
            // Save the user input in local storage using the time block id as a key
            localStorage.setItem(timeBlockId, userInput);
          });
        });
      });
      
     