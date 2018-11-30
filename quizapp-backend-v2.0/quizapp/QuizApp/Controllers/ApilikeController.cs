using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AutoMapper;
using ModelClasses.Entities.Testing;
using ModelClasses.Entities.TestParts;
using QuizApp.Models;
using QuizApp.ViewModel;
using QuizApp.ViewModel.Managing;
using QuizApp.ViewModel.Mapping;
using Services;

namespace QuizApp.Controllers
{
    // [Authorize]
    [AllowCrossSiteJson]
    public class ApilikeController : Controller
    {
        private readonly IGetInfoService _getInfoService;
        private readonly ILowLevelTestManagementService _lowLevelTestManagementService;
        private readonly IHighLevelTestManagementService _highLevelTestManagementService;

        private readonly IMapper _mapper;
        private readonly IAdvancedMapper _advancedMapper;

        public ApilikeController(IGetInfoService getInfoService,
            ILowLevelTestManagementService lowLevelTestManagementService,
            IHighLevelTestManagementService highLevelTestManagementService, IMapper mapper,
            IAdvancedMapper advancedMapper)
        {
            _getInfoService = getInfoService;
            _lowLevelTestManagementService = lowLevelTestManagementService;
            _highLevelTestManagementService = highLevelTestManagementService;
            _mapper = mapper;
            _advancedMapper = advancedMapper;
        }

        [HttpGet]
        public JsonResult GetAnswersByQuestionGuid(string questionGuid)
        {
            var answerViewModelList = _getInfoService
                .GetQuestionByGuid(questionGuid)
                ?.TestAnswers
                .Select(a => _mapper.Map<AnswerViewModel>(a))
                .ToList();

            return Json(answerViewModelList, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult CreateAnswer(string questionGuid, AnswerViewModel answer)
        {
            answer.Guid = Guid.NewGuid().ToString();
            var testAnswer = _mapper.Map<TestAnswer>(answer);
            bool result = _lowLevelTestManagementService.CreateAnswerForQuestion(questionGuid, testAnswer); ;
            return Json(result, JsonRequestBehavior.AllowGet);

        }

        [HttpPost]
        public ActionResult RemoveAnswer(string answerGuid)
        {
            bool result = _lowLevelTestManagementService.RemoveAnswer(answerGuid);
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult GetQuestionsByTestGuid(string testGuid)
        {
            var questionViewModelList = _getInfoService
                .GetTestByGuid(testGuid)
                ?.TestQuestions
                .Select(q => _advancedMapper.MapTestQuestion(q))
                .ToList();

            return Json(questionViewModelList, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult CreateQuestion(string testGuid, QuestionViewModel question)
        {
            question.Guid = Guid.NewGuid().ToString();
            var testQuestion = _mapper.Map<TestQuestion>(question);
            var result = _mapper.Map<QuestionViewModel>(_lowLevelTestManagementService.CreateQuestionForTest(testGuid, testQuestion));
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult RemoveQuestion(string testGuid, string questionGuid)
        {
            return Json(_lowLevelTestManagementService.RemoveQuestion(questionGuid), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public void UpdateQuestion(string questionGuid, QuestionViewModel question)
        {
            var testQuestion = _mapper.Map<TestQuestion>(question);
            _lowLevelTestManagementService.UpdateQuestion(questionGuid, testQuestion);
        }

        [HttpPost]
        public ActionResult CreateTest(TestViewModel test)
        {
            test.Guid = Guid.NewGuid().ToString();
            var testFromDomain = _advancedMapper.MapTestViewModel(test);
            var result = _advancedMapper.MapTest(_highLevelTestManagementService.CreateTest(testFromDomain));
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public void UpdateTest(string testGuid, TestViewModel test)
        {
            var testFromDomain = _advancedMapper.MapTestViewModel(test);
            _highLevelTestManagementService.UpdateTest(testGuid, testFromDomain);
        }

        [HttpPost]
        public ActionResult RemoveTest(string testGuid)
        {
            return Json(_highLevelTestManagementService.RemoveTest(testGuid), JsonRequestBehavior.AllowGet);
        }


        [HttpPost]
        public void CreateTestingUrl(TestingUrlViewModel testingUrl)
        {
            testingUrl.Guid = Guid.NewGuid().ToString();
            var testUrlDomain = _advancedMapper.MapTestingUrlViewModel(testingUrl);
            _highLevelTestManagementService.CreateTestingUrl(testUrlDomain);
            //     return Json(_advancedMapper.MapTestingUrl(result), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public void RemoveTestingUrl(string testingUrlGuid)
        {
            _highLevelTestManagementService.RemoveTestingUrl(testingUrlGuid);
        }

        [HttpGet]
        public ActionResult GetTestByTestingUrlGuid(string testingUrlGuid)
        {
            var result = _getInfoService.GetTestByTestingUrlGuid(testingUrlGuid);
            
            return Json(_advancedMapper.MapTest(result), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public void RemoveTestingResult(string testingResultGuid)
        {
            _highLevelTestManagementService.RemoveTestingResult(testingResultGuid);
        }
    }
}