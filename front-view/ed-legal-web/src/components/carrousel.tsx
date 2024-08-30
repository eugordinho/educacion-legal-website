import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

/* const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    ...
}); */
const options = { modules: [Navigation, Pagination] };
const swiper = new Swiper('.swiper', { ...options });