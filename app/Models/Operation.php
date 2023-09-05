<?php

namespace App\Models;

use App\Models\Employe;
use App\Models\Medecin;
use App\Models\Consultation;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Operation extends Model
{
    protected $fillable=["BlocOperatoire","DateDebut","DateFin","Observation","idConsultation"];
    public function employes(){
        return 	$this->belongsToMany(Employe::class);
    }
    public function Consultation(){
        return 	$this->belongsTo(Consultation::class);
    }
}
