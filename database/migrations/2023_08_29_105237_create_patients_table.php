<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('patients', function (Blueprint $table) {
            $table->id('idpatient');
            $table->string('CIN');
            $table->string('Nom');
            $table->string('Prenom');
            $table->string('Adresse');
            $table->string('Email');
            $table->string('Tel');
            $table->string('Medecin');
            $table->foreign('Medecin')->references('Matricule')->on('medecins')
            ->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('patients');
    }
};
