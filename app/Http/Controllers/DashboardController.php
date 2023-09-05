<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Medecin;
use App\Models\Patient;
use App\Models\Operation;
use App\Models\Infermiere;
use App\Models\AttachedFile;
use App\Models\Consultation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    public function Dashboard(){
        $medecins=Medecin::all()->count();
        $patients = Patient::all()->count();
        $infermieres=Infermiere::all()->count();
        $consultations=Consultation::all()->count();
        $operations=Operation::all()->count();
        return response()->json(compact(['medecins','patients','infermieres','consultations','operations']));
    }
    public function getPatients(){
        $patientChart = Patient::selectRaw('DATE_FORMAT(created_at,"%M") as month, COUNT(*) as count')
        ->groupBy("month")
        ->get();
        $count=$patientChart->pluck('count');
        $month=$patientChart->pluck('month');
        return response()->json(compact('count','month'));
    }
    public function PatientDeJour(){
        $today = Carbon::today();
        $patientsAddedToday = Patient::whereDate('created_at', $today)->take(3)->get();
        return response()->json(compact('patientsAddedToday'));
    }
    public function AddFiles(Request $request){
        $count=$request->count;
     $files=$request->file('attachedFiles_0')->getClientOriginalName();
          $idConsultation= $request->idConsultation;
       $TypeConsultation= $request->TypeConsultation;
       for ($i=0; $i < $count; $i++) { 
        $file=$request->file('attachedFiles_'.$i);
        $fileName = time() . '_' . $file->getClientOriginalName();
        $path = $file->move(public_path('/attachedFiles'), $fileName);
        AttachedFile::create([
            'image' => '/attachedFiles/'.$fileName,
            'TypeConsultation' => $TypeConsultation,
            'idConsultation' => $idConsultation
        ]);
    }
    return response()->json(["message"=>"Success"]);
    //    $idConsultation= $request->data['idConsultation'];
    //    $TypeConsultation= $request->data['TypeConsultation'];
    //    foreach ($files as $file) {
    //     AttachedFile::create([
    //         'image'=>$file,'TypeConsultation'=>$TypeConsultation, 'idConsultation'=>$idConsultation
    //     ]);}
    }
}
