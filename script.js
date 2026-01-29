

const taskButton1 =document.getElementById('task-status-btn-1');
const taskButton2 =document.getElementById('task-status-btn-2');
const taskButton3 =document.getElementById('task-status-btn-3');
const taskButton4 =document.getElementById('task-status-btn-4');
const taskButton5 =document.getElementById('task-status-btn-5');
const taskButton6 =document.getElementById('task-status-btn-6');


const taskAssigned = document.getElementById('task-assigned-count');
  

const tasks = [taskButton1, taskButton2, taskButton3, taskButton4, taskButton5, taskButton6];

tasks.forEach(function(taskButton) {
    taskButton.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Task Completed');
        taskButton.setAttribute('disabled', true);
        taskButton.style.backgroundColor = 'gray';
        let currentCount = parseInt(taskAssigned.innerText);
        const UpdatedTaskCount = currentCount - 1;
        taskAssigned.innerText = UpdatedTaskCount;

    });
}
);
