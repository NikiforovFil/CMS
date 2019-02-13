export function CountersTypes() {
    let typesOfCounters = [
        { type: 'gas', name: 'газ' },
        { type: 'hot_water', name: 'горячая вода' },
        { type: 'cold_water', name: 'холодная вода' },
        { type: 'electricity', name: 'электричество' },
        { type: 'heating', name: 'отопление' },
    ];
    return typesOfCounters;
}

//получение русских названий счетчиков
export function getRusType(type: string) {
    let countersList = CountersTypes();
    for (let i in countersList) {
        if (countersList[i].type == type) {
            return countersList[i].name;
        }
    }
}

//получения адреса и номера аккаунта
export function getStrAddress(data, allUsers): string {
    let uid = data.uid;
    if (allUsers[uid]) {
        //формирования адреса
        if (allUsers[uid].liter !== '') {
            return 'Город ' + allUsers[uid].city + ', улица ' + allUsers[uid].street + ', дом ' + allUsers[uid].home + ', литер ' + allUsers[uid].liter + ', квартира ' + allUsers[uid].apart;
        } else {
            return 'Город ' + allUsers[uid].city + ', улица ' + allUsers[uid].street + ', дом ' + allUsers[uid].home + ', квартира ' + allUsers[uid].apart;
        }
    } else {
        return "Пользователь не найден";
    }
}
export function getAccount(data, allUsers) {
    let uid = data.uid;
    if (allUsers[uid]) {
        if (allUsers[uid].account != null) {
            return allUsers[uid].account;
        } else {
            return '-';
        }
    } else {
        return '-';
    }
}
