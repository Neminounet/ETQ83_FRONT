function CurrentDate() {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('fr-FR', {
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric'
    });

    return <div>{ formattedDate }</div>
}

export default CurrentDate;