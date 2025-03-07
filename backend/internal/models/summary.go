package models

import "time"

type GetGrossSummaryRequest struct {
	CompanyID     string `json:"company_id"`
	MonthDuration int    `json:"month_duration"`
}

type GetGrossSummaryResponse struct {
	TotalCO2  float64        `json:"total_co2"`
	StartDate time.Time      `json:"start_date"`
	EndDate   time.Time      `json:"end_date"`
	Months    []MonthSummary `json:"months"`
}

type MonthSummary struct {
	MonthStart time.Time    `json:"month_start"`
	Scopes     ScopeSummary `json:"scopes"`
}

type ScopeSummary struct {
	ScopeOne   float64 `json:"scope_one"`
	ScopeTwo   float64 `json:"scope_two"`
	ScopeThree float64 `json:"scope_three"`
}
