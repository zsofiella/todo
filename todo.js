(function() {
    let todos = [];
    const bodyDay = document.querySelector('.body__day');
    const bodyDate = document.querySelector('.body__date');
    const todoAddBtn = document.querySelector('.todo__btn');
    const todoInput = document.querySelector('.todo__inout');
    const todoListPending = document.querySelector('.todo__list--pending');

    const dayNames = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];
    const localDB = {
        setItem(key, value){
            value = JSON.stringify(value);
            localStorage.setItem(key, value);
        },
        getItem(key) {
            const value = localStorage.getItem(key);
            if (!value) {
                return null;
            }
            return JSON
            }
        }
        }
    }
})