<?php

namespace App\Models;

use App\Models\Patient;
use App\Models\Operation;
use App\Models\AttachedFile;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Consultation extends Model
{
    protected $primaryKey='idConsultation';
    protected $fillable=["idConsultation","idpatient","TypeConsultation","Objet","Observation","Date"];
    public function patient(){
        return 	$this->belongsTo(Patient::class);
    }
    public function operation(){
        return 	$this->hasOne(Operation::class);
    }
    public function attachedFiles(){
        return 	$this->hasMany(AttachedFile::class);
    }
}
