package com.example.ccpapplication.navigation

sealed class AppPages (val route: String) {
    object LoginPage : AppPages(route = "login")
    object RegisterPage : AppPages(route = "register")
    object HomePage : AppPages(route = "home")
    object ShoppingCartPage : AppPages(route = "shoppingCart")

}