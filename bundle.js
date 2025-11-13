require("@babel/polyfill");
var $5vEUF$axios = require("axios");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
/* eslint-disable */ 
const $d302dba86ecabc68$export$4c5dd147b21b9176 = (locations)=>{
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2hyZWVoYXJpbmFpciIsImEiOiJjbWNuMWlzczEwMXU3MmtzZmJ4Nm1mdTI5In0.3qkK66SUiM4SwMVEEq5f8w';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/shreeharinair/cmcn1smqy009o01sb74yz91s0',
        scrollZoom: false
    });
    const bounds = new mapboxgl.LngLatBounds();
    locations.forEach((loc)=>{
        // Create marker
        const el = document.createElement('div');
        el.className = 'marker';
        // Add marker
        new mapboxgl.Marker({
            element: el,
            anchor: 'bottom'
        }).setLngLat(loc.coordinates).addTo(map);
        // Add popup
        new mapboxgl.Popup({
            offset: 30
        }).setLngLat(loc.coordinates).setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`).addTo(map);
        // Extend map bounds to include current location
        bounds.extend(loc.coordinates);
    });
    map.fitBounds(bounds, {
        padding: {
            top: 200,
            bottom: 150,
            left: 100,
            right: 100
        }
    });
};



// type is 'success' or 'error'
const $58394e4197da80d6$export$516836c6a9dfc573 = ()=>{
    const el = document.querySelector('.alert');
    if (el) el.parentElement.removeChild(el);
};
const $58394e4197da80d6$export$de026b00723010c1 = (type, msg)=>{
    $58394e4197da80d6$export$516836c6a9dfc573();
    const markup = `<div class="alert alert--${type}">${msg}</div>`;
    document.querySelector('body').insertAdjacentHTML('afterbegin', markup);
    window.setTimeout($58394e4197da80d6$export$516836c6a9dfc573, 5000);
};


const $38b0ee8694086852$export$596d806903d1f59e = async (email, password)=>{
    try {
        const res = await (0, ($parcel$interopDefault($5vEUF$axios)))({
            method: 'POST',
            url: '/api/v1/users/login',
            data: {
                email: email,
                password: password
            }
        });
        if (res.data.status === 'success') {
            (0, $58394e4197da80d6$export$de026b00723010c1)('success', 'Logged in successfully!');
            window.setTimeout(()=>{
                location.assign('/');
            }, 1500);
        }
    } catch (err) {
        (0, $58394e4197da80d6$export$de026b00723010c1)('error', err.response.data.message);
    }
};
const $38b0ee8694086852$export$a0973bcfe11b05c9 = async ()=>{
    try {
        const res = await (0, ($parcel$interopDefault($5vEUF$axios)))({
            method: 'GET',
            url: '/api/v1/users/logout'
        });
        res.data.status = 'success';
        location.reload(true);
    } catch (err) {
        console.log(err);
        (0, $58394e4197da80d6$export$de026b00723010c1)('error', 'Error logging out! Try again');
    }
};




const $bc2f965b776cd45a$export$f558026a994b6051 = async (data, type)=>{
    try {
        const url = type === 'password' ? 'http://127.0.0.1:3000/api/v1/users/updateMyPassword' : 'http://127.0.0.1:3000/api/v1/users/updateMe';
        const res = await (0, ($parcel$interopDefault($5vEUF$axios)))({
            method: 'PATCH',
            url: url,
            data: data
        });
        if (res.data.status === 'success') (0, $58394e4197da80d6$export$de026b00723010c1)('success', `${type.toUpperCase()} updated successfully!`);
    } catch (err) {
        (0, $58394e4197da80d6$export$de026b00723010c1)('error', err.response.data.message);
    }
};




const $3fda4c155b644227$var$stripe = Stripe('pk_test_51RhleyPXQmqJXA8DXpZVAqU11WLdI78kme3ZZG4i4Y3RNqyrUipdVT1jZl460okrrJaQD0wksPkWmwdVfE8k5s5J00Kr5U688v');
const $3fda4c155b644227$export$8d5bdbf26681c0c2 = async (tourId)=>{
    try {
        // 1) Get checkout session from API
        const session = await (0, ($parcel$interopDefault($5vEUF$axios)))(`/api/v1/bookings/checkout-session/${tourId}`);
        // console.log(session);
        // 2) Create checkout form + charge credit card
        await $3fda4c155b644227$var$stripe.redirectToCheckout({
            sessionId: session.data.session.id
        });
    } catch (err) {
        console.log(err);
        (0, $58394e4197da80d6$export$de026b00723010c1)('error', err);
    }
};



// DOM ELEMENTS
const $59e8e58134e4e2a7$var$mapBox = document.getElementById('map');
const $59e8e58134e4e2a7$var$loginForm = document.querySelector('.form--login');
const $59e8e58134e4e2a7$var$logOutBtn = document.querySelector('.nav__el--logout');
const $59e8e58134e4e2a7$var$userDataForm = document.querySelector('.form-user-data');
const $59e8e58134e4e2a7$var$userPasswordForm = document.querySelector('.form-user-password');
const $59e8e58134e4e2a7$var$bookBtn = document.getElementById('book-tour');
// DELEGATION
if ($59e8e58134e4e2a7$var$mapBox) {
    const locations = JSON.parse($59e8e58134e4e2a7$var$mapBox.dataset.locations);
    (0, $d302dba86ecabc68$export$4c5dd147b21b9176)(locations);
}
if ($59e8e58134e4e2a7$var$loginForm) $59e8e58134e4e2a7$var$loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    (0, $38b0ee8694086852$export$596d806903d1f59e)(email, password);
});
if ($59e8e58134e4e2a7$var$logOutBtn) $59e8e58134e4e2a7$var$logOutBtn.addEventListener('click', (0, $38b0ee8694086852$export$a0973bcfe11b05c9));
if ($59e8e58134e4e2a7$var$userDataForm) $59e8e58134e4e2a7$var$userDataForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const form = new FormData();
    form.append('name', document.getElementById('name').value);
    form.append('email', document.getElementById('email').value);
    form.append('photo', document.getElementById('photo').files[0]);
    (0, $bc2f965b776cd45a$export$f558026a994b6051)(form, 'data');
});
if ($59e8e58134e4e2a7$var$userPasswordForm) $59e8e58134e4e2a7$var$userPasswordForm.addEventListener('submit', async (e)=>{
    e.preventDefault();
    document.querySelector('.btn--save-password').textContent = 'Updating...';
    const passwordCurrent = document.getElementById('password-current').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('password-confirm').value;
    await (0, $bc2f965b776cd45a$export$f558026a994b6051)({
        passwordCurrent: passwordCurrent,
        password: password,
        passwordConfirm: passwordConfirm
    }, 'password');
    document.querySelector('.btn--save-password').textContent = 'Save password';
    document.getElementById('password-current').value = '';
    document.getElementById('password').value = '';
    document.getElementById('password-confirm').value = '';
});
if ($59e8e58134e4e2a7$var$bookBtn) $59e8e58134e4e2a7$var$bookBtn.addEventListener('click', (e)=>{
    e.target.textContent = 'Processing...';
    const { tourId: tourId } = e.target.dataset;
    (0, $3fda4c155b644227$export$8d5bdbf26681c0c2)(tourId);
});
const $59e8e58134e4e2a7$var$alertMessage = document.querySelector('body').dataset.alert;
if ($59e8e58134e4e2a7$var$alertMessage) (0, $58394e4197da80d6$export$de026b00723010c1)('success', $59e8e58134e4e2a7$var$alertMessage, 20);


//# sourceMappingURL=bundle.js.map
