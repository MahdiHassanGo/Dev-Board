const taskAssigned = document.getElementById('task-assigned-count');
const notifCount = document.getElementById('notif-count');
const activityList = document.getElementById('activity-list');

const tasks = [
  document.getElementById('task-status-btn-1'),
  document.getElementById('task-status-btn-2'),
  document.getElementById('task-status-btn-3'),
  document.getElementById('task-status-btn-4'),
  document.getElementById('task-status-btn-5'),
  document.getElementById('task-status-btn-6'),
].filter(Boolean);

tasks.forEach((taskButton) => {
  taskButton.addEventListener('click', (e) => {
    e.preventDefault();

    taskButton.disabled = true;
    taskButton.classList.remove('bg-indigo-600', 'hover:bg-indigo-700');
    taskButton.classList.add('bg-slate-400', 'cursor-not-allowed');

    let currentCount = parseInt(taskAssigned.innerText);
    if (currentCount <= 0) return;

    taskAssigned.innerText = currentCount - 1;

    let currentNotifCount = parseInt(notifCount.innerText);
    notifCount.innerText = currentNotifCount + 1;

    const card = taskButton.closest('article');
    const title = card?.querySelector('h3')?.innerText?.trim() || 'Task';
   const createTime = new Date().toLocaleTimeString([], {
  hour: '2-digit',
  minute: '2-digit',
});


    const li = document.createElement('li');
    li.className = 'rounded-xl bg-slate-50 p-3 text-sm text-slate-600';
    li.innerHTML = `Completed “${title}”
      <span class="mt-1 block text-xs text-slate-400">${createTime}</span>`;

    activityList.prepend(li);

    if (parseInt(taskAssigned.innerText) <= 0) {
      alert('No tasks remaining!');
    }
  });
});



const ClearHistoryBtn = document.getElementById('activity-clear-btn');
ClearHistoryBtn.addEventListener('click', function () {
    activityList.innerHTML = '';
}); 