﻿using System.Web.Mvc;
using Abp.Web.Mvc.Authorization;

namespace SAIC_FTS.Web.Controllers
{
    [AbpMvcAuthorize]
    public class HomeController : SAIC_FTSControllerBase
    {
        public ActionResult Index()
        {
            return View("~/App/Main/views/layout/layout.cshtml"); //Layout of the angular application.
        }
	}
}