﻿using ModelClasses.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;
using System.Web.UI.WebControls;
using QuizApp.ViewModel;
using Services;
using DAL.DataAccess;
using QuizApp.Models;
using Microsoft.Owin.Security;
namespace QuizApp.Controllers
{
    [AllowCrossSiteJson]
    public class AccountController : Controller
    {
        private readonly IUserService _userService;
        private HttpCookie cookie;
        public AccountController(IUserService userService)
        {
            _userService = userService;
            FormsAuthentication.SetAuthCookie("admin", false);
            cookie = new HttpCookie("adminCookie");
            cookie.Value = "admin";
            cookie.Expires = DateTime.Now.AddHours(1);
        }

        // GET: Account
        //public ActionResult Login()
        //{
            
        //    return View();
        //}

        [HttpPost]
        public void Login(LoginViewModel model)
        {           
            //if (!ModelState.IsValid) return View(model);
            var userValid = _userService.IsLoginDataCorrect(model.Username, model.Password);
            if (userValid)
            {
                if(model.Username=="admin")
                {
                    Response.BufferOutput = true;
                    Response.SetCookie(cookie);
                    Response.ContentType = "application/json";
                    var payload = "{\"username\":\"" + model.Username + "\",\"password\":\""+model.Password+"\"}";
                    Response.Write(payload);
                    Response.Flush();
                }
                //else
                //{
                //  return null;
                //}                    
            //    return Json(model, JsonRequestBehavior.AllowGet);
            }

            //else
            //{
            //    return null;
            //      return Json(model, JsonRequestBehavior.AllowGet);
            //}
            //if (userValid)
            //{
            //    FormsAuthentication.SetAuthCookie(model.Username, false);
            //    if (Url.IsLocalUrl(returnUrl) 
            //        && returnUrl.Length > 1 
            //        && returnUrl.StartsWith("/")
            //        && !returnUrl.StartsWith("//") 
            //        && !returnUrl.StartsWith("/\\"))
            //    {
            //        return Redirect(returnUrl);
            //    }
            //    else
            //    {
            //        return RedirectToAction("ResultManagement", "Admin");
            //    }
            //}
            //else
            //{
            //    ModelState.AddModelError("", "The user name or password provided is incorrect.");
            //}
            //return View(model);
        }

        public ActionResult LogOff()
        {
            FormsAuthentication.SignOut();

            return RedirectToAction("Login", "Account");
        }


    }
}