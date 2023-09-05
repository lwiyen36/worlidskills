<?php

namespace App\Http\Controllers;

use Throwable;
use App\Models\User;
use App\Models\Employe;
use App\Models\Medecin;
use App\Models\Patient;
use App\Models\Operation;
use App\Models\Infermiere;
use App\Models\Departement;
use App\Models\Consultation;
use Illuminate\Http\Request;
use App\Models\OperationEmploye;

class AssistantController extends Controller
{
    public function indexPatient(){
        $patients=Patient::all();
        return response()->json(["patients"=>$patients]);
    }
    public function GetPatient($id){
        $patient=Patient::where('idPatient',$id)->get();
        return response()->json(["patient"=>$patient]);
    }
    public function employes(){
        $employes=Employe::all();
        return response()->json(["employes"=>$employes]);
    }
    public function GetMedecins(){
        $medecins=Medecin::all();
        return response()->json(["medecins"=>$medecins]);
    }
    public function MedecinConsultation($email){
        $consultations=Consultation::join('patients','patients.idpatient','consultations.idpatient')->join('medecins','medecins.Matricule','patients.Medecin')->join('employes','employes.idEmp','medecins.idEmp')->where('employes.Email',$email)->select('consultations.idConsultation','consultations.TypeConsultation','consultations.Objet','consultations.Observation','consultations.Date','consultations.idpatient')->get();
        return response()->json(["consultations"=>$consultations]);
    }
    
    public function departements(){
        $departements=Departement::all();
        return response()->json(["departements"=>$departements]);
    }
    public function AddEmploye(Request $request){
       Employe::create([
        "TypeEmploye"=>$request->donne['TypeEmploye'],
        "Nom"=>$request->donne['Nom'],
        "Prenom"=>$request->donne['Prenom'],
        "Email"=>$request->donne['Email'],
        "Tel"=>$request->donne['Tel']
       ]);
       User::create([
        "name"=> $request->donne["Nom"],  //nom du user
        "email"=>$request->donne["Email"],
        "password" => bcrypt($request->donne["password"])
       ]);
        return response()->json(["message"=>"Ajouter par success"]);
    }
    public function AddInfermier(Request $request){
        Infermiere::create([
         "Nom"=>$request->donne['Nom'],
         "idEmp"=>$request->donne['idEmp'],
         "idDep"=>$request->donne['idDep']
    
        ]);
         return response()->json(["message"=>"Ajouter par success"]);
     }
    public function AddMedecin(Request $request){
        Medecin::create([
         "Matricule"=>$request->donne['Matricule'],
         "Service"=>$request->donne['Service'],
         "Specialite"=>$request->donne['Specialite'],
         "Tarif"=>$request->donne['Tarif'],
         "idEmp"=>$request->donne['idEmp']
        ]);
         return response()->json(["message"=>"Ajouter par success"]);
     }
    
    public function RechercherConsultation(Request $request){
        $medcin=Medecin::where('Matricule',$request->donne['Medecin'])->get()[0];
        if(isset($request->donne['DateFin'])){
            $consultations=Operation::join('operation_employes','operation_employes.idOperation','operations.id')
            ->join('consultations','consultations.idConsultation','operations.idConsultation')
             ->WhereBetween('operations.DateDebut',[$request->donne['DateDebut'],$request->donne['DateFin']])
            ->where('operation_employes.idEmploye',$medcin['idEmp'])->where('consultations.idpatient',$request->donne['patient'])->select('consultations.idConsultation','consultations.TypeConsultation','consultations.Objet','consultations.Observation','consultations.Date','operations.DateDebut','operations.DateFin','consultations.idpatient')->get();
        }else{
            $consultations=Operation::join('operation_employes','operation_employes.idOperation','operations.id')->join('consultations','consultations.idConsultation','operations.idConsultation')->where('operations.DateDebut','>',$request->donne['DateDebut'])->where('operation_employes.idEmploye',$medcin['idEmp'])->where('consultations.idpatient',$request->donne['patient'])->select('consultations.idConsultation','consultations.TypeConsultation','consultations.Objet','consultations.Observation','consultations.Date','operations.DateDebut','operations.DateFin','consultations.idpatient')->get();
        }
        return response()->json(["consultations"=>$consultations]);
    }
    public function addoperation(Request $request){
        $operation=Operation::create([
            "BlocOperatoire"=>$request->operation['BlocOperatoire'],
            "DateDebut"=>$request->operation['DateDebut'],
            "DateFin"=>$request->operation['DateFin'],
            "Observation"=>$request->operation['Observation'],
            "idConsultation"=>$request->operation['idConsultation']
        ]);
        $employes=$request->employes;
        foreach( $employes as $emp) {  
            $emp = (int)$emp;
            OperationEmploye::create([
                "idEmploye"=>$emp,
                "idOperation"=>$operation['id']
            ]);
        }
        return response()->json(["message"=>"Ajouter Par success"]);
    }
    
    public function AddPatient(Request $request){
            Patient::create([
            'Nom'=>$request->patient['Nom'],
            'CIN'=>$request->patient['CIN'],
            'Prenom'=>$request->patient['Prenom'],
            'Adresse'=>$request->patient['Adresse'],
            'Tel'=>$request->patient['Tel'],
            'Email'=>$request->patient['Email'],
            'Medecin'=>$request->patient['Medecin']
        ]);
         return response()->json(["Message"=>"Ajouter Par success"]);
    }
    public function getconsultations(){
        $con=Consultation::all();
        return response()->json(["consultations"=>$con]);
    }
    public function RendezVous(Request $request){
        Consultation::create([
            'idpatient'=>$request->idpatient,
            'TypeConsultation'=>$request->TypeConsultation,
            'Objet'=>$request->Objet,
            'Observation'=>$request->Observation,
            'Date'=>$request->Date
        ]);
        return response()->json(["message"=>"SUCCESS"]);
    }
    
    public function EditPatient(Request $request,$id){
        if($id==null){
            return response()->json(["Message"=>"id error".$id]);        }
            $patient=Patient::where('idpatient',$id)->get()[0];
            if ($patient==null){
                return  response()->json(['message'=>'not found']);
            } 
            $patient->idpatient=$request->patient['idpatient'];
            $patient->CIN=$request->patient['CIN'];
            $patient->Nom=$request->patient['Nom'];
            $patient->Prenom=$request->patient['Prenom'];
            $patient->Adresse=$request->patient['Adresse'];
            $patient->Medecin=$request->patient['Medecin'];
            $patient->Email=$request->patient['Email'];
            $patient->Tel=$request->patient['Tel'];
            $patient->save();
         return response()->json(["Message"=>"Modifier Par success"]);
    }
}
