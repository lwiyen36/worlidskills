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
        Schema::create('consultations', function (Blueprint $table) {
            $table->id('idConsultation');
            $table->unsignedBigInteger('idpatient');
            $table->foreign('idpatient')->references('idpatient')->on('patients')
            ->onDelete('cascade');
            $table->string("TypeConsultation");
            $table->string("Objet");
            $table->string("Observation");
            $table->date("Date");
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
        Schema::dropIfExists('consultations');
    }
};
