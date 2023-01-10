import {all} from "redux-saga/effects"

import { maincategorySaga } from "./MaincategorySaga"
import { subcategorySaga } from "./SubcategorySaga"
import { brandSaga } from "./BrandSaga"
import { productSaga } from "./ProductSaga"

export default function* RootSaga(){
    yield all([maincategorySaga(),subcategorySaga(),brandSaga(),productSaga()])
}