<?php

namespace App\Models;

use App\Models\Consultation;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class AttachedFile extends Model
{
    protected $fillable=["idConsultation","TypeConsultation","image"];
    public function consultation(){
        return 	$this->belongsTo(Consultation::class,"idConsultation");
    }
}
