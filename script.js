
function calculateAge() {

    const inputDay = document.getElementById('day').value;
    const inputMonth = document.getElementById('month').value;
    const inputYear = document.getElementById('year').value;

    const currentDate = new Date();//CurrentDate

    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1; //January is 0
    const currentYear = currentDate.getFullYear();

    const years = currentYear - inputYear;//Sub 
    const months = currentMonth - inputMonth;
    const days = currentDay - inputDay;

    if (months < 0 || months === 0 && days < 0) {
        years--;
        months += 12;
    }                   //Condition

    if (days < 0) {
        const previousMonth = new Date(currentYear, currentMonth - 1, 0);
        days += previousMonth.getDate();
        months--;
    }
    document.getElementById('Years').textContent = years + ' Year';
    document.getElementById('Months').textContent = months + ' Month';
    document.getElementById('Days').textContent = days + ' Day';
}
document.getElementById('day').addEventListener('input', calculateAge);//EventListnerer
document.getElementById('month').addEventListener('input', calculateAge);
document.getElementById('year').addEventListener('input', calculateAge);


