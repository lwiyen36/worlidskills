<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AssistantController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\AuthentificationController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get("/getPatients", [AssistantController::class, 'indexPatient']);
Route::get("/getRole/{email}", [AuthentificationController::class, 'getRole']);
Route::get("/employes", [AssistantController::class, 'employes']);
Route::get("/departements", [AssistantController::class, 'departements']);
Route::get("/getPatient/{id}", [AssistantController::class, 'GetPatient']);
Route::get("/getMedecins", [AssistantController::class, 'GetMedecins']);
Route::post("/AddPatient", [AssistantController::class, 'AddPatient']);
Route::put("/EditPatient/{id}", [AssistantController::class, 'EditPatient']);
Route::post("/RendezVous", [AssistantController::class, 'RendezVous']);
Route::get("/consultations", [AssistantController::class, 'getconsultations']);
Route::post("/addoperation", [AssistantController::class, 'addoperation']);
Route::post("/RechercheConsultation", [AssistantController::class, 'RechercherConsultation']);
Route::post("/AddEmploye", [AssistantController::class, 'AddEmploye']);
Route::post("/AddMedecin", [AssistantController::class, 'AddMedecin']);
Route::post("/AddInfermier", [AssistantController::class, 'AddInfermier']);
Route::post("/login", [AuthentificationController::class, 'Login']);
Route::get("/MedecinConsultation/{email}", [AssistantController::class, 'MedecinConsultation']);
Route::get("/dashboard", [DashboardController::class, 'Dashboard']);
Route::get("/DashPatients", [DashboardController::class, 'getPatients']);
Route::get("/PatientDeJour", [DashboardController::class, 'PatientDeJour']);
Route::post("/AddFiles", [DashboardController::class, 'AddFiles']);
Route::post("/logout", [AuthentificationController::class, 'logout']);
Route::post("/addDepartement", [AssistantController::class, 'addDepartement']);
Route::get("/getDepartements", [AssistantController::class, 'getDepartements']);
