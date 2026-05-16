async function createCustomer () {
    await fetch (`/Customer`, {
        method: 'POST',
        body: JSON.stringify({
            firstName: `${document.getElementById('firstName').value}`,
            lastName: `${document.getElementById('lastName').value}`,
            state: `${document.getElementById('state').value}`,
        }),
        headers: {
            'content-type': 'application/json'
        }
    }).then((result) => result.json());

    await loadCustomerData();
}

async function loadCustomerData() {
    await fetch('/Customer')
        .then((result) => result.json())
        .then((resultJson) => {
            console.log(resultJson);
            const table = document.createElement('table');
            table.setAttribute('id', 'customerInfo');
            // Setting up table heading row
            const tableRow = document.createElement('tr');

            const tableHeadingFirstName = document.createElement('th');
            tableHeadingFirstName.innerHTML = 'First Name';
            
            const tableHeadingLastName = document.createElement('th');
            tableHeadingLastName.innerHTML = 'Last Name';
            
            const tableHeadingState = document.createElement('th');
            tableHeadingState.innerHTML = 'State';

            tableRow.appendChild(tableHeadingFirstName);
            tableRow.appendChild(tableHeadingLastName);
            tableRow.appendChild(tableHeadingState);

            table.appendChild(tableRow);

                // Adding data to table
            resultJson.forEach((customer) => {
                const customerTableRow = document.createElement('tr');
                const customerTableFirstName = document.createElement('td');
                const customerTableLastName = document.createElement('td');
                const customerTableState = document.createElement('td');

                customerTableFirstName.innerHTML = customer['customer_first_name'];
                customerTableLastName.innerHTML = customer['customer_last_name'];
                customerTableState.innerHTML = customer['customer_state'];

                customerTableRow.appendChild(customerTableFirstName);
                customerTableRow.appendChild(customerTableLastName);
                customerTableRow.appendChild(customerTableState);

                table.appendChild(customerTableRow);
            });

            const preExistingTable = document.getElementById('customerInfo');
            if(preExistingTable) {
                preExistingTable.remove();
            }

            document.body.appendChild(table);
        });
}

window.onload = loadCustomerData;