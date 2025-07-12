require("@babel/polyfill");
var $cQivH$axios = require("axios");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
/* eslint-disable */ 
const $b521082dd449d16e$export$4c5dd147b21b9176 = (locations)=>{
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
const $cf8ea27b34b2137b$export$516836c6a9dfc573 = ()=>{
    const el = document.querySelector('.alert');
    if (el) el.parentElement.removeChild(el);
};
const $cf8ea27b34b2137b$export$de026b00723010c1 = (type, msg)=>{
    $cf8ea27b34b2137b$export$516836c6a9dfc573();
    const markup = `<div class="alert alert--${type}">${msg}</div>`;
    document.querySelector('body').insertAdjacentHTML('afterbegin', markup);
    window.setTimeout($cf8ea27b34b2137b$export$516836c6a9dfc573, 5000);
};


const $433b644962c26f49$export$596d806903d1f59e = async (email, password)=>{
    try {
        const res = await (0, ($parcel$interopDefault($cQivH$axios)))({
            method: 'POST',
            url: '/api/v1/users/login',
            data: {
                email: email,
                password: password
            }
        });
        if (res.data.status === 'success') {
            (0, $cf8ea27b34b2137b$export$de026b00723010c1)('success', 'Logged in successfully!');
            window.setTimeout(()=>{
                location.assign('/');
            }, 1500);
        }
    } catch (err) {
        (0, $cf8ea27b34b2137b$export$de026b00723010c1)('error', err.response.data.message);
    }
};
const $433b644962c26f49$export$a0973bcfe11b05c9 = async ()=>{
    try {
        const res = await (0, ($parcel$interopDefault($cQivH$axios)))({
            method: 'GET',
            url: '/api/v1/users/logout'
        });
        res.data.status = 'success';
        location.reload(true);
    } catch (err) {
        console.log(err);
        (0, $cf8ea27b34b2137b$export$de026b00723010c1)('error', 'Error logging out! Try again');
    }
};




const $6842e7be16478138$export$f558026a994b6051 = async (data, type)=>{
    try {
        const url = type === 'password' ? 'http://127.0.0.1:3000/api/v1/users/updateMyPassword' : 'http://127.0.0.1:3000/api/v1/users/updateMe';
        const res = await (0, ($parcel$interopDefault($cQivH$axios)))({
            method: 'PATCH',
            url: url,
            data: data
        });
        if (res.data.status === 'success') (0, $cf8ea27b34b2137b$export$de026b00723010c1)('success', `${type.toUpperCase()} updated successfully!`);
    } catch (err) {
        (0, $cf8ea27b34b2137b$export$de026b00723010c1)('error', err.response.data.message);
    }
};




const $73e585bd0c7d6b97$var$stripe = Stripe('pk_test_51RhleyPXQmqJXA8DXpZVAqU11WLdI78kme3ZZG4i4Y3RNqyrUipdVT1jZl460okrrJaQD0wksPkWmwdVfE8k5s5J00Kr5U688v');
const $73e585bd0c7d6b97$export$8d5bdbf26681c0c2 = async (tourId)=>{
    try {
        // 1) Get checkout session from API
        const session = await (0, ($parcel$interopDefault($cQivH$axios)))(`/api/v1/bookings/checkout-session/${tourId}`);
        // console.log(session);
        // 2) Create checkout form + charge credit card
        await $73e585bd0c7d6b97$var$stripe.redirectToCheckout({
            sessionId: session.data.session.id
        });
    } catch (err) {
        console.log(err);
        (0, $cf8ea27b34b2137b$export$de026b00723010c1)('error', err);
    }
};



// DOM ELEMENTS
const $c74e663a61ed842a$var$mapBox = document.getElementById('map');
const $c74e663a61ed842a$var$loginForm = document.querySelector('.form--login');
const $c74e663a61ed842a$var$logOutBtn = document.querySelector('.nav__el--logout');
const $c74e663a61ed842a$var$userDataForm = document.querySelector('.form-user-data');
const $c74e663a61ed842a$var$userPasswordForm = document.querySelector('.form-user-password');
const $c74e663a61ed842a$var$bookBtn = document.getElementById('book-tour');
// DELEGATION
if ($c74e663a61ed842a$var$mapBox) {
    const locations = JSON.parse($c74e663a61ed842a$var$mapBox.dataset.locations);
    (0, $b521082dd449d16e$export$4c5dd147b21b9176)(locations);
}
if ($c74e663a61ed842a$var$loginForm) $c74e663a61ed842a$var$loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    (0, $433b644962c26f49$export$596d806903d1f59e)(email, password);
});
if ($c74e663a61ed842a$var$logOutBtn) $c74e663a61ed842a$var$logOutBtn.addEventListener('click', (0, $433b644962c26f49$export$a0973bcfe11b05c9));
if ($c74e663a61ed842a$var$userDataForm) $c74e663a61ed842a$var$userDataForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const form = new FormData();
    form.append('name', document.getElementById('name').value);
    form.append('email', document.getElementById('email').value);
    form.append('photo', document.getElementById('photo').files[0]);
    (0, $6842e7be16478138$export$f558026a994b6051)(form, 'data');
});
if ($c74e663a61ed842a$var$userPasswordForm) $c74e663a61ed842a$var$userPasswordForm.addEventListener('submit', async (e)=>{
    e.preventDefault();
    document.querySelector('.btn--save-password').textContent = 'Updating...';
    const passwordCurrent = document.getElementById('password-current').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('password-confirm').value;
    await (0, $6842e7be16478138$export$f558026a994b6051)({
        passwordCurrent: passwordCurrent,
        password: password,
        passwordConfirm: passwordConfirm
    }, 'password');
    document.querySelector('.btn--save-password').textContent = 'Save password';
    document.getElementById('password-current').value = '';
    document.getElementById('password').value = '';
    document.getElementById('password-confirm').value = '';
});
if ($c74e663a61ed842a$var$bookBtn) $c74e663a61ed842a$var$bookBtn.addEventListener('click', (e)=>{
    e.target.textContent = 'Processing...';
    const { tourId: tourId } = e.target.dataset;
    (0, $73e585bd0c7d6b97$export$8d5bdbf26681c0c2)(tourId);
});
const $c74e663a61ed842a$var$alertMessage = document.querySelector('body').dataset.alert;
if ($c74e663a61ed842a$var$alertMessage) (0, $cf8ea27b34b2137b$export$de026b00723010c1)('success', $c74e663a61ed842a$var$alertMessage, 20);


//# sourceMappingURL=bundle.js.map
